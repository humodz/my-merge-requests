import Vue from 'vue';
import ms from 'ms';

function truncateText(text, maxLength) {
  if (text.length <= maxLength) {
    return text;
  } else {
    return text.slice(0, maxLength - 1) + '…';
  }
}

function padZeros(value, amount) {
  return String(value).padStart(amount, '0');
}

function formatDate(rawDate, formatString) {
  const date = new Date(rawDate);

  const mappings = {
    YYYY: () => padZeros(date.getFullYear(), 4),
    MM: () => padZeros(date.getMonth() + 1, 2),
    DD: () => padZeros(date.getDate(), 2),
    HH: () => padZeros(date.getHours(), 2),
    mm: () => padZeros(date.getMinutes(), 2),
    ss: () => padZeros(date.getSeconds(), 2),
  };

  return formatString.replace(/YYYY|MM|DD|HH|mm|ss/g, match => {
    return mappings[match]();
  });
}

function lastUpdateInterval(updateAt) {
  return ms(Date.now() - new Date(updateAt).getTime(), { long: true });
}

export const MergeRequestList = Vue.component('app', {
  props: {
    mergeRequests: Array,
  },

  data() {
    return {
      showOnlyIncludesMe: true,
    };
  },

  computed: {
    filteredMergeRequests() {
      if (!this.showOnlyIncludesMe) {
        return this.mergeRequests;
      }

      return this.mergeRequests.filter(mr => mr.includesMe);
    },

    noMergeRequestsMessage() {
      const message = 'There are no merge requests to display';

      if (this.filteredMergeRequests.length !== this.mergeRequests.length) {
        return `${message} (${this.mergeRequests.length} hidden)`;
      }

      return message;
    }
  },

  render(h) {
    return h('div', {}, [
      h('div', { class: 'form-group mergeRequestToolbar' }, [
        h('button', {
          class: 'btn btn-outline-primary',
          attrs: { type: 'button' },
          on: { click: () => this.$emit('clear-credentials') },
        }, 'Reset Credentials'),
        h('div', { class: 'form-check' }, [
          h('input', {
            class: 'form-check-input',
            attrs: {
              id: 'only-includes-me',
              type: 'checkbox',
              checked: this.showOnlyIncludesMe ? 'checked' : undefined,
            },
            on: {
              change: event => {
                this.showOnlyIncludesMe = Boolean(event.target.checked)
              },
            },
          }),
          h('label', {
            class: 'form-check-label',
            attrs: {
              for: 'only-includes-me',
            },
          }, 'Only show merge requests that I participate in'),
        ]),
      ]),

      (this.filteredMergeRequests.length === 0) ? [
        h('h5', { class: 'text-center' }, this.noMergeRequestsMessage),
      ] : [],

      this.filteredMergeRequests.map(mergeRequest => {
        // mergeRequest.labels = ['feature', 'deploy', 'ready for review'];

        const projectName = mergeRequest.references.full.split('!')[0];
        const projectUrl = mergeRequest.web_url.split('/-/')[0];

        const sourceBranch = truncateText(mergeRequest.source_branch, 60);
        const targetBranch = truncateText(mergeRequest.target_branch, 60);

        const participants = mergeRequest.participants.filter(
          participant => mergeRequest.author.username !== participant.username,
        );

        return h('div', { class: 'mergeRequest--item' }, [
          h('img', {
            class: 'mergeRequest--authorImage',
            attrs: {
              src: mergeRequest.author.avatar_url,
              width: 48,
              height: 48,
              title: `${mergeRequest.author.name} (${mergeRequest.author.username})`,
            },
          }),
          h('div', { class: 'mergeRequest--body' }, [
            h('p', { class: 'mergeRequest--p' }, [
              h('a', {
                class: 'mergeRequest--title',
                attrs: {
                  href: mergeRequest.web_url,
                  target: '_blank',
                },
              }, mergeRequest.title),
            ]),
            h('p', { class: 'mergeRequest--p' }, [
              h('a', {
                class: 'mergeRequest--project',
                attrs: {
                  href: projectUrl,
                  target: '_blank',
                },
              }, projectName),
              ` · updated ${lastUpdateInterval(mergeRequest.updated_at)} ago `,
              mergeRequest.labels.map(label => h('div', { class: `badge badge-primary` }, label)),
            ]),
            h('p', { class: 'mergeRequest--p' }, [
              h('span', { class: 'mergeRequest--branches' }, `${sourceBranch} 🡪 ${targetBranch} `),
            ]),
            h('div', { class: 'mergeRequest--participants', }, [
              h('span', {
                class: 'mergeRequest--comments',
              }, [
                `${mergeRequest.user_notes_count} `,
                h('img', {
                  attrs: {
                    src: 'assets/comment.png',
                    width: 16,
                    height: 16,
                  },
                }),
              ]),
              participants.map(participant => h('img', {
                class: 'mergeRequest--participantImage',
                attrs: {
                  src: participant.avatar_url,
                  width: 24,
                  height: 24,
                  title: `${participant.name} (${participant.username})`,
                },
              })),
            ])
          ]),
        ]);
      }),
    ]);
  },
});

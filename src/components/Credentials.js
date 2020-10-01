import Vue from 'vue';
import { validateCredentials } from '../service/credentials';

export const Credentials = Vue.component('app-credentials', {
  props: {
    host: String,
    token: String,
  },

  data() {
    return {
      gitlabHost: this.host || '',
      gitlabToken: this.token || '',
      loading: false,
      errors: [],
    };
  },

  render(h) {
    return h('form', {
      on: {
        submit: this.onFormSubmit,
      },
    }, [
      h('div', { class: 'form-group', }, [
        h('label', { attrs: { for: 'gitlab-host' } }, 'GitLab URL'),
        h('input', {
          attrs: {
            id: 'gitlab-host',
            type: 'text',
            value: this.gitlabHost,
            placeholder: 'https://...',
          },
          class: 'form-control',
          on: {
            input: event => this.gitlabHost = event.target.value,
          },
        }),
      ]),
      h('div', { class: 'form-group' }, [
        h('label', { attrs: { for: 'gitlab-token' } }, 'GitLab Access Token'),
        h('input', {
          attrs: {
            id: 'gitlab-token',
            type: 'text',
            value: this.gitlabToken,
          },
          class: 'form-control',
          on: {
            input: event => this.gitlabToken = event.target.value,
          },
        }),
      ]),
      h('button', {
        class: 'btn btn-primary',
        attrs: {
          type: 'submit',
          disabled: !(this.gitlabHost || '').trim() || !(this.gitlabToken || '').trim(),
        },
      }, [
        'Submit ',
        !this.loading ? [] : h('div', {
          class: 'spinner-border spinner-border-sm text-light',
          style: 'vertical-align: middle',
        }),
      ]),
      this.errors.map(errorMessage =>
        h('div', { class: 'alert alert-danger mt-3' }, errorMessage),
      ),
      h('div', { class: 'mt-5' }, [
        h('h4', {}, 'How to Create an Access Token'),
        h('p', {}, [
          'In GitLab, go to ', h('strong', {}, 'Settings > Access Tokens'), ', choose a name and an expiration date, ',
          'check the ', h('strong', {}, 'read_user'), ' and ', h('strong', {}, 'read_api'), ' permissions, and click ',
          h('span', { class: 'badge badge-success' }, 'Create personal access token'),
        ]),
      ]),
    ]);
  },

  methods: {
    async onFormSubmit(event) {
      event.preventDefault();
      this.errors = [];

      const credentials = {
        host: this.gitlabHost.trim(),
        token: this.gitlabToken.trim(),
      };

      this.loading = true;

      const result = await validateCredentials(credentials.host, credentials.token)
        .finally(() => this.loading = false);

      if (result.ok) {
        this.$emit('submit', credentials);
        return;
      }

      if (result.code === 'INVALID_HOST') {
        this.errors.push('URL is not valid or does not allow CORS');
      }

      if (result.code === 'INVALID_TOKEN') {
        this.errors.push('Invalid access token');
      }
    },
  },
});

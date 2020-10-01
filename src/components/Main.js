import Vue from 'vue';

import { Credentials } from './Credentials';
import { clearCredentials, getCredentials, saveCredentials, validateCredentials } from '../service/credentials';
import { MergeRequestList } from './MergeRequestList';
import { Gitlab } from '@gitbeaker/browser';
import { getMergeRequests } from '../service/merge-requests';

export const Main = Vue.component('app-main', {
  data() {
    return {
      loading: false,
      credentials: getCredentials() || { host: '', token: '' },
      mergeRequests: null,
    };
  },

  async mounted() {
    await this.validateCredentials();
  },

  methods: {
    async updateCredentials(credentials) {
      saveCredentials(credentials);
      this.credentials = credentials;
      await this.validateCredentials();
    },

    clearCredentials() {
      clearCredentials();
      this.credentials = { host: '', token: ''};
    },

    async validateCredentials() {
      const { host, token } = this.credentials;

      if (!host || !token) {
        return;
      }

      this.loading = true;
      const result = await validateCredentials(host, token)
        .finally(() => this.loading = false);

      if (!result.ok) {
        this.credentials = { host: '', token: '' };
        return;
      }

      await this.getMergeRequests();
    },

    async getMergeRequests() {
      this.loading = true;
      const gitlab = new Gitlab(this.credentials);
      this.mergeRequests = await getMergeRequests(gitlab)
        .finally(() => this.loading = false);
    }
  },

  render(h) {
    return h('main', {
      class: 'container main--container',
      attrs: { id: 'app' },
    }, [
      h('div', { class: 'row' }, [
        h('div', { class: 'col' }, [
          (this.loading) ? [
            h('div', { class: 'd-flex justify-content-center' }, [
              h('div', { class: 'spinner-border text-primary' }),
            ]),
          ] : (!this.credentials.host || !this.credentials.token) ? [
            h(Credentials, {
              props: {
                host: this.credentials.host,
                token: this.credentials.token,
              },
              on: {
                submit: this.updateCredentials,
              },
            }),
          ] : (this.mergeRequests) ? [
            h(MergeRequestList, {
              props: {
                mergeRequests: this.mergeRequests,
              },
              on: {
                'clear-credentials': this.clearCredentials,
              },
            }),
          ] : [
            h('div', {}, 'Loading...'),
          ],
        ]),
      ]),
    ]);
  },
});

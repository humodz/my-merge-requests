# my-merge-requests
List all merge requests that you've opened or have been mentioned in.

## Why

The version of GitLab that I use does not have an easy way to see this kind of information, like BitBucket does.

## How to Use

In GitLab, go to *Settings > Access Tokens*, and create an access token with the following permissions: **read_user**, **read_api**.

Then, just go to https://humodz.github.io/my-merge-requests/ and fill in the URL of your GitLab server and the access token you just created.

The credentials are stored using localStorage. Use *Reset Credentials* to clear them. If you want to see all open merge requests, even the ones that you weren't mentioned in, uncheck *Only show merge requests that I participate in*


### Suggestions or Improvements?
Please open an issue or pull request

#!/bin/bash
if [ "$NETLIFY" ]
  then
    if [ "$HEAD" = "master" ]
      then
        echo "sync preview branch with latest master"

        # set SSH key (replace _'s from env var with \n's)
        # see https://community.netlify.com/t/support-guide-using-an-ssh-key-via-environment-variable-during-build/2457
        mkdir -p ~/.ssh
        echo -e "${GITHUB_SSH_KEY//_/\\n}" > ~/.ssh/id_rsa
        chmod og-rwx ~/.ssh/id_rsa

        # add GitHub as known host
        ssh-keyscan -t rsa github.com >> ~/.ssh/known_hosts

        # configure git
        git config user.name "Voorhoede Git Bot"
        git config user.email "git@voorhoede.nl"

        # sync preview branch
        git clone --depth 1 "$GIT_ORIGIN_URL"
        cd nuxt-dato-netlify-preview/ || exit
        git checkout -b preview
        git merge master
        git push --force origin preview
    else
        echo "skipping sync preview for $HEAD branch"
    fi
fi

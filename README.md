# Petfinder Project 5

## Git Workflow
- Add new file(s) OR Make Changes to file(s)
- Stage changes ```git add -A```
- Commit changes ```git commit -m "message"```
- Push commit to your repo ```git push origin master```
- Goto YOUR version of the repo on GitHub
- Make a new pull request
- Everyone Needs to then review and approve the changes
- Then pull the changes from the group repo ```git pull upstream master```

## Style Guide
- tab characters: spaces
- tab size: 4
- sass method: no bem
- sass style: camelCase
- file/folder names: all lower, underscores for spaces

# Setup

## Sublime Setup
- In sublime open ```Preferences>Settings```
- Add these settings to the bottom of the User settings ```"translate_tabs_to_spaces": true, "tab_size": 4```

## Git setup
- Fork this repo (Button in the top right corner)
- Clone the forked repo into your projects folder ```git clone URL_FOR_YOUR_FORKED_REPO```
- Change directory ```cd petfinder```
- Add this repo as a remote called upsteam ```git remote add upstream https://github.com/petfinderProject5/petfinder.git```

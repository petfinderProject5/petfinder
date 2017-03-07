# Petfinder Style Guide
- tab characters: spaces
- tab size: 4
- sublime line endings: system
- git line endings: git config core.autocrlf true
- sass method: no bem
- sass style: camelCase
- file/folder names: all lower, underscores for spaces

# Git Workflow
- Add new file(s) OR Make Changes to file(s)
- Stage changes ```git add -A```
- Commit changes ```git commit -m "message"```
- Push commit to your repo ```git push origin master```
- Goto YOUR version of the repo on GitHub
- Make a new pull request
- Everyone Needs to then review and approve the changes
- Then pull the changes from the group repo ```git pull upstream master```
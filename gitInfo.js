/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

const gitDefinition = "Git is a version control system, that allows us keep track on the changes an individual or team has made on a project. We take snapshots of our code and Git allows us to share our changes we made or revert back to a previous version if there was a bug."

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

const gitHubDefinition = "GitHub is where developers upload their code using Git. A local repository is made using git where that data is saved on to a local device. A user than creates a remote repository on GitHub, where we must link the repositories together, allowing others to easily visualize and access your code"

//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

const gitInitDefinition = "git init is a terminal git command to intialize a local repository in the current directory we are in."

//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

const gitCloneDefinition = "Copys an existing Git repository. It will create a .git directory inside the folder we want to copy. Used to contribute on an exisiting project, copy and start revising or revert back to a previous version if it is in that copy."
//CODE HERE

//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

const gitStatusDefinition = "git status tells us details about our repo, say we wanted to make sure the repo was init or have added new files"

//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

const gitAddDefinition ="git add allows us to add files to be tracked in our repo, whether thats adding certain items or adding all new changes since our previous commit(snapshot)."
const gitAddCode ="git add ."

//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

const gitCommitDefinition ="git commit creates the snapshot of the files im tracking. After we commit we are able to push our local repo onto a remote repo made on GitHub"
const gitCommitCode = 'git commit -m \"initial commit\"'

//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

const gitPushDefinition = "After we make and connect our remote repo with our device, we are able to \'git push\' files onto the GitHub server."

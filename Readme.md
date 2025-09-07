# Mailer

A simple tool for quick html email sending.


#### Tech

- [node.js](http://nodejs.org)

#### NPM packages

- [dotenv](https://www.npmjs.com/package/dotenv)
- [nodemailer](https://www.npmjs.com/package/nodemailer)




## Configuration

##### Sender Google Account

1. Create a Google account designated for sending test emails.
2. Go to https://myaccount.google.com/apppasswords to setup an `app pass` for the script.
3. Create an `app pass` with any name and **save the generated pass somewhere**. This pass is only shown once.

##### Script
1. Install [node.js](http://nodejs.org)
2. Place the `mailer.js` and the `package.json` in the **root** of the workspace

3. Open terminal (``ctrl+` ``) in root folder of the workspace and run:
    ```sh
    npm i
    ```
   If you already had `package.json` in your project. Then manually add `dotenv` and `nodemailer` packages to it with:
    ```sh
    npm i [package-name]
    ```

4. Create `.env` file in **root** of the workspace folder with these variables:
    ```
   MAILER_AUTH_USERNAME_1="{username without @gmail.com}"   // testmail
    MAILER_AUTH_EMAIL_1="{full email}"	                     // testmail@gmail.com
    MAILER_AUTH_PASSWORD_1="{app pass}"		                 // xxxx xxxx xxxx xxxx
    ```
   If needed you can add a second account:
    ```
    MAILER_AUTH_USERNAME_2="{username without @gmail.com}"   // testmail
    MAILER_AUTH_EMAIL_2="{full email}"	                     // testmail@gmail.com
    MAILER_AUTH_PASSWORD_2="{app pass}"		                 // xxxx xxxx xxxx xxxx
    ```
   Switch **active sending account**:
    ```
    MAILER_ACTIVE_ACCOUNT_NUM=”1”
    ```
   **Recipient email**:
    ```
    MAILER_RECIPIENT=”{recipient email}”		             // recipient@gmail.com
    ```

##### VSCode



5. Place `tasks.json` in the `.vscode/` folder or manually add a task to the task array if the file already exists in your project.

6. Create a custom button for running a script:  
   - Get the [Task Buttons Extension by spencerwmiles](https://marketplace.visualstudio.com/items?itemName=spencerwmiles.vscode-task-buttons)  
   - Head to `File -> Preferences -> Settings` (or `Code -> Settings -> Settings` on *mac*).  
   - Search for `Vs Code Task Buttons: Tasks` and click `Edit in settings.json`.  
   - Configure a button or paste my settings:   
   
    ```json
    {
      "VsCodeTaskButtons.tasks": [
        {
            "label": "Send test email",
            "alignment": "right",
            "task": "Send test email with Nodemailer",
            "tasks": "",
            "tooltip": "Send test email",
            "description": "Run mailer.js. Send a test email to a configured receiver",
            "color": "warning"
        }
      ]
   }
    ```

##### WebStorm, PHPStorm and other inteliJ IDE's


5. Create a `Run` configuration
   - In the top bar open the `debug/configurations` dropdown menu and select `Edit configurations`.
   - Click `+` (`Add new configuration`) -> `Node.js`.
   - Give it a name
   - Enter the `mailer.js` file name in the `File:` field
   - Enter the `$FilePath$` argument in the `Application parameters:` field
   - Click apply -> ok

6. In the top bar open the `debug/configurations` dropdown menu and select the created configuration


## Usage

##### VSCode

###### Run Button
1. Open html file in the editor
2. Click the button at the bottom status bar

###### Via command palette
1. Open html file in the editor
2. Open the `Command Palette` by pressing `Ctrl + Shift + P` (or `Command + Shift + P` on *mac*).
3. Search for `Run task` -> Send test email with Nodemailer

###### Manually
1. Open terminal (`` Ctrl + ` ``)
2. Run
    ```sh
    node mailer.js "{Relative path to a file}"
    ```



##### WebStorm, PHPStorm and other intelliJ IDE's

###### Run Button
1. Open html file in the editor
2. Click `Run` button at the top toolbar


## Troubleshooting

> Test emails go to spam folder or don't get delivered

You may have to manually send some emails **from** and **to** the newly created account to show some human activity.  
It could take a few days, so another solution is to use an existing email account until the new one doesn't deliver.

> Emails have stopped delivering after heavy use

There's a daily gmail limit to sending emails this way. It should be fixed the next day






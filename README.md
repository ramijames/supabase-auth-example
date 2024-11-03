![Preview](https://github.com/ramijames/supabase-auth-example/blob/main/public/screenshot.png?raw=true)

# Supabase Auth Example

This template project is intended to provide a best-practice example for setting up Supabase auth. 

It uses these Nuxt 3 modules:

- [Supabase module](https://supabase.nuxtjs.org/get-started)
- [Google Fonts](https://google-fonts.nuxtjs.org/)
- [Icon](https://icones.js.org/)

Sass is also installed. There are two main assets:

- **_variables.scss** - A standardized set of colors, spacing, font-sizes, etc.
- **main.scss** - A standardized set of html elements that I consistently use across my projects which includes basic typography, buttons, forms and inputs, tables, etc.

For this demo, you'll need to have a [Supabase](https://supabase.com) account, and have created an app there.

## Getting started

You'll need to add an .env file after you've created your Supabase project. I've provided a template with .env.example

You can find your specific details in the Home Dashboard, under the "Connect" button on the top-right of the screen. Select Nuxt from the App Frameworks section.

### Github OAuth integration

The first OAuth app which is integrated into this demo is Github. To use this, you'll need to go to the [Github Developer Settings page](https://github.com/settings/developers), and create a new app.

Inside the app you've just created, you'll see a client ID which you'll have to copy over to Supabase. Besides this, you'll have to generate a client secret, which will be copied alongside this.

Inside of Supabase, you'll have to navigate to **Authentication > Configuration > Providers** and scroll down to Github. In here you'll be inputting your client ID and secret.

There is a Callback URL here, which you'll need to go back to Github's OAuth app and input in the App in Developer Settings.

That's it. Your user can now connect to your Supabase app with Github.

### Magic Link integration

You won't be able to use Magic Links unless you set up SMTP to send emails with your own service.

Supabase now limits authentication emails so that they are only sent to organization members' email addresses. You'll have to set up a custom SMTP provider to handle flows like password reset which require sending emails to any user. I used Google Workspace for this and [provide an how-to on my website](https://www.ramijames.com/thoughts/supabase-email-authentication-with-google-workspace).

If you are getting "Error: AuthApiError: Error sending confirmation email" errors in your console, you haven't set up SMTP correctly.

To get this demo to recognize Magic Links, you'll have to append a url parameter to the emails that Supabase sends out.

These are located in Supabase under **Authentication > Configuration > Email Templates**.

#### Confirm Signup email template

```html
<h2>Confirm your signup</h2>

<p>Follow this link to confirm your user:</p>
<p><a href="{{ .ConfirmationURL }}login?magiclink=true">Confirm your mail</a></p>
```

#### Magic Link email template
```html
<h2>Magic Link</h2>

<p>Follow this link to login:</p>
<p><a href="{{ .ConfirmationURL }}login?magiclink=true">Log In</a></p>
```

This allows the auth.js middleware to differentiate between OAuth and the Magic Link.

## Database setup

Since this example currently only uses Supabase authentication, there is no database setup required.
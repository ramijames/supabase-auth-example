# Supabase Auth Example

The auth example that Supabase provides isn't actually a good solution. When building off of it, I found that I was having intermittent session expirations. It gives a solid base for understanding the basics of what Supabase is, and how their system works, but it does not provide developers with a best-practice that they can use to build their own projects.

This template project is intended to do that.

It uses Nuxt 3's [Supabase module](https://supabase.nuxtjs.org/get-started).

## Getting started

You'll need to add an .env file after you've created your Supabase project. I've provided a template with .env.example

You can find your specific details in the Home Dashboard, under the "Connect" button on the top-right of the screen. Select Nuxt from the App Frameworks section.

## Database setup



## Authentication emails

Supabase now limits authentication emails so that they are only sent to organization members' email addresses. You'll have to set up a custom SMTP provider to handle flows like password reset which require sending emails to any user. I used Google Workspace for this and [provide an how-to on my website](https://www.ramijames.com/thoughts/supabase-email-authentication-with-google-workspace).
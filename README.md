# Roots In Yahweh — Ultimate Website

This is a Next.js project containing the combined R.I.Y website. The root route loads the complete website from `public/riy.html`, so the existing black-and-gold site and the added voice/video call panel are kept together.

## Deploy on Vercel using GitHub

1. Download and unzip this project.
2. Upload the contents of the unzipped folder to your GitHub repository (replace the old project files when prompted).
3. In Vercel, import that GitHub repository or open the existing Vercel project and redeploy after pushing the changes.
4. Use the package manager already configured for your repository (`pnpm install`, then `pnpm dev` locally if you have Node.js).

## Firebase setup

The Firebase web configuration is in `public/riy.html`. Firebase web API keys are client configuration, not server passwords; security depends on Firebase Authentication, Realtime Database rules, and API restrictions. Before allowing members to use the site:

- In Firebase Console, enable **Authentication → Email/Password**.
- Confirm the Realtime Database is in the Europe region matching the configured database URL.
- Set and test Realtime Database Security Rules. Do not use public read/write rules. The chat feature expects authenticated users and the `users`, `usernames`, and chat paths described in the website code.
- Review the rules against the actual code before launch; do not assume the frontend alone protects private messages.

## Voice/video calls

Members must sign into the Youth Chat, share their temporary call ID with the intended person, and allow microphone/camera access. Calls require HTTPS and working browser permissions. PeerJS is used for call signaling and WebRTC for media. Do not share call IDs publicly. Availability depends on the public PeerJS signaling service and network/firewall settings.

## Notes

- The Q&A wall, meme board, games, drawing canvas and wallpaper downloads use browser-local storage or client-side code where indicated in the interface.
- The Bible Q&A helper is a small rule-based demo, not a hosted generative AI service.
- Keep a copy of your previous repository before replacing files.

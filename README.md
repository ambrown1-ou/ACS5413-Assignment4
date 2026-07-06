# Assignment 4 — Multi-Module Expo App

Modular React Native app with icon-based module launcher (Photos, Music, Messages, Camera, Calls). Each module has its own navigation stack.

## Quick Start

```bash
npm install
npm start
```

Run on device/emulator:
- `npm run android`
- `npm run ios`
- `npm run web`

## File Structure

```
app/                    # Routes & screens
  _layout.tsx          # Root layout
  index.tsx            # Home screen
  modules/             # Feature modules (Photos, Music, Messages, Camera, Calls)

src/
  components/          # UI components
  config/              # App configuration (modules list)
  hooks/               # Module logic controllers
  theme/               # Design tokens
  types/               # TypeScript types
```

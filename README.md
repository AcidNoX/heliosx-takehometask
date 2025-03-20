# HeliosX take-home test👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app) and uses expo GO which should work on android or iOS.

> note this was developed on android and has not been tested on iOS

## Get started

1. Install dependencies

   ```bash
   yarn install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

## Notes

Hi! Thanks for reviewing my work!🙌

Overall I really enjoyed this challenge. Unfortunately I started it already tired, at gone 10pm due to an incident at work. So this definetly isn't my finest work to date but I'm more or less happy with the end result.

## Trade offs

### Loading states

I started out simulating an async API with the intent to add loading indicators/skeletons but I'm afraid I ran out of time.

### Testing

Whilst I did get some intgration tests in, I would really have like to spent more time unit testing everything.

### Expo Router

First time using expo router and it largely has the same issue that I have with NextJS file system based routing - which is that you can't co-locate other files types, such as types/tests/styles/etc with screens.

Because of this I felt I spent way too much time adding generic components for doing screen layout that I might not have needed, had I created styled-components along side the screen.

### useConsulationForm

I'm not overly happy with the separation of concerns in this hook. Ideally I would have split out the filtering for which qustions to show from the form/submission logic.

### Animations

I had some ideas in my head about how to implement the progressive disclosure of the questions - it was going to be like a deck of cards, which would shuffle when you answer the next question.

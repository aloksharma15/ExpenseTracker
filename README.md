# Expense Tracker PMTBNK

## Tech Stack

- [React Native] 
- [Redux]


## Folder Structure

```
├── App.tsx
├── component
│   ├── addEditExpenseForm.tsx
│   ├── const.ts
│   ├── expenseList.tsx
│   └── headerExpensesStatus.tsx
├── data
│   └── redux
│       ├── actions
│       │   └── expenseActions.ts
│       ├── const
│       │   └── expenseConst.ts
│       ├── reducer
│       │   └── expenseReducer.ts
│       └── store.ts
├── helper
│   ├── alert.ts
│   ├── format.ts
│   └── scale.ts
└── main.tsx
```

## Getting Started

## Step 1: Preparation

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

```bash
git clone https://github.com/Rickyarians/expense-tracker-pmtbnk.git
```

```bash
cd expense-tracker-pmtbnk
```

## Step 2: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 3: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.


## Screenshot 

![alt text](https://i.ibb.co/ZWHP8np/expense-final.png)

[React Native]: <https://reactnative.dev/>
[Redux]: <https://redux-toolkit.js.org/>
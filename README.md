# React-webshop - Technical Assessment

## Intro

This website is the companion application for the technical assessment repository, React-Webshop. This site is designed to assist job applicants during technical interviews by providing detailed stories. Our goal is to support you through the interview process, helping you demonstrate your skills and knowledge effectively.

## Resources

To get up and running you can use the following resources:
Stack blitz
Cloud dev environment
Github
Code repository

## Technology requirements

These are the technological environment requirements if you chose to go with the github setp. Stackblitz handles this automatically via the cloud environment.

Nodejs version 20
npm version 10

## Technologie choices

The assesment repo is setup intentionally with some opinions already in place. Do not worry if you are not familiar with one or more of these libraries. You are not assest on your knowledge of libraries. These opinions are in place to have a starting place and to simulate a work environment where you have to join in an already existing codebase.

Documentation:
JS Library
React v18
Styling
Tailwindcss
Router
TanStack Router
Data querying
React Query
Data validation
Zod
Backend
trpc
Language
Typescript
Build tool
Vite

## Folder Structure

public
Static assets
src/client
All client related source code
src/client/assets
Assets to be bundled in via js imports
src/client/components
All reuseable components should live here
src/client/routes
\_\_root.tsx : The general layout of all pages within the routes
[page-name].lazy.tsx : Any /[page-name] route that is outlet inside \_\_root
src/server
All backend related source code
db.ts : contains the code of a mock db
index.ts : contains the routes/procedures for the trpc service
trpc.ts : bootstrap code for the trpc service
src/util
Simple util stuff shared between client and backend

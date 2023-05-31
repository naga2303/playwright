FROM mcr.microsoft.com/playwright:v1.32.0-jammy
USER root
RUN mkdir /playwrightTests
COPY . /playwrightTests
WORKDIR /playwrightTests/playwrightTesting/
RUN npm install
RUN npx @playwright/test install
RUN npx playwright install-deps
RUN npm install allure-playwright
RUN npm run triggerheadless
FROM mcr.microsoft.com/playwright:v1.32.0-jammy
USER root
RUN mkdir /playwrightTests
COPY . /playwrightTests
WORKDIR /playwrightTests/playwrightTesting/
CMD npm install && npx @playwright/test install && npx playwright install-deps && npm install allure-playwright && npm run triggerheadless
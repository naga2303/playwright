FROM mcr.microsoft.com/playwright:v1.32.0-jammy
USER root
RUN mkdir /playwrightTests
COPY . /playwrightTests
WORKDIR /playwrightTests/playwrightTesting/
RUN npm ci
#RUN npx @playwright/test install
#RUN npx playwright install-deps
#RUN npm install allure-playwright
CMD ["npm", "run", "triggerheadless"]
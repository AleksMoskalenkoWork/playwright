FROM mcr.microsoft.com/playwright:v1.50.1-noble
WORKDIR /playwright

# Install the application dependencies
COPY package*.json ./
RUN npm install

# Copy in the source code
COPY . .

CMD ["npx", "playwright", "test"]
#!/bin/bash

# EC2 Deployment Script for Portfolio (nginx already setup)
# This script builds and deploys your SvelteKit portfolio to EC2

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}📦 Building the project...${NC}"
yarn
yarn build

echo -e "${YELLOW}📁 Creating deployment archive...${NC}"
tar -czf portfolio-build.tar.gz -C build .

echo -e "${YELLOW}🚀 Uploading to EC2...${NC}"
scp -i ~/.ssh/caapi.pem portfolio-build.tar.gz ec2-user@54.176.98.28:/tmp/

echo -e "${YELLOW}🔧 Deploying on EC2...${NC}"
ssh -i ~/.ssh/caapi.pem ec2-user@54.176.98.28 << 'EOF'
    # Extract the build
    cd /tmp
    sudo tar -xzf portfolio-build.tar.gz -C /var/w3/portfolio
    
    # Clean up
    rm -f /tmp/portfolio-build.tar.gz
    
    echo "✅ Deployment completed successfully!"
EOF

# Clean up local archive
rm -f portfolio-build.tar.gz

echo -e "${GREEN}🎉 Deployment completed successfully!${NC}"

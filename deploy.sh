#!/usr/bin/env bash
aws --version
aws configure set aws_access_key_id $AWS_ACCESS_KEY_ID
aws configure set aws_secret_access_key $AWS_SECRET_ACCESS_KEY
aws configure set default.region eu-west-2
aws configure set default.output text
echo "Deploying application..."
aws s3 sync build s3://tttreact-hosting-mobilehub-2140333729 --delete 

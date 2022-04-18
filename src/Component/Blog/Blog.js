import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-primary fw-bold'>Difference between authorization and authentication</h1>
            <p>Authentication means to confirm your own identity, while authorization means to grant access to the system. In simple terms, authentication verifies who you are, while authorization verifies what you have access to. Learn more about what is the difference between authentication and authorization from the table below</p>
            <h1 className='text-primary fw-bold'>Why are you  using firebase? What other options do you have to implement authentication?</h1>
            <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
                fire base alternatives:
                Parse – Open Source Backend Platform;
                Back4app – Parse Hosting Platform;
                Kinvey – Mobile Backend as a Service (mBaaS) for the Enterprise;
                Backendless – Mobile Backend and API Services Platform;
                Kuzzle – Backend for web, hybrid, or native mobile apps and IoT projects;
                Pubnub – Real-time APIs and Global Messaging;
                Kumulos – App Performance Management;
                Game Sparks – Game Backend Platform;
                Hoodie – Generic backend with a client API for Offline First applications;
                Appwrite : Open-Source backend for Flutter developers
                Deployd : Simple core library, with a modular API for your application;
                NHost : Accelerates development and provides full control;
            </p>
            <h1 className='text-primary fw-bold'>What other services does firebase provides other than authentication?</h1>
            <p>Realtime Database: We have by far now known about the very first product of Firebase, and this product is the reason behind this company’s success.
            Firebase Cloud Messaging: This type of messaging platform allows the developer to build an interface that would provide a reliable connection between the server and devices so that messages and notifications are received at no extra cost.
            </p>
        </div>
    );
};

export default Blog;
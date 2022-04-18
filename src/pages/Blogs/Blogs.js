import React from 'react';

const Blogs = () => {
  return (
    <section id="blogs" className="p-6 text-white text-justify">
      <h2 className="text-4xl text-center my-4">My recent blogs</h2>
      <article className="">
        <h2 className="text-2xl">
          ## Difference between authentication and authorization.
        </h2>
        <p>
          A: In the authentication, checking information of the identity for
          providing the access to the system. While in the authorization, a
          user's information admin is checked for accessing the website. In the
          authentication, users are verified. While authorization in this, users
          are validated. It is done before the authorization While this process
          is done after the authentication.
        </p>
      </article>
      <article className="my-4">
        <h2 className="text-2xl">
          ## Why are you using firebase? What other options do you have to
          implement authentication?
        </h2>
        <p>
          A: The best part is that Firebase has all the features that helped my
          apps to grow to the next level. Firebase Authentication makes it easy
          for developers to build secure authentication systems. Analytics
          presents data about user behavior in iOS and Android apps, enabling
          better decision-making about improving performance and app marketing.
          Firebase Real-time Database is a cloud-hosted NoSQL database that
          enables data to be stored and synced between users in real time. Here
          is some open-source alternative to firebase authentication Auth0,
          MongoDB, Okta, JSON Web Token, Amazon Cognito, and Keycloak.
        </p>
      </article>
      <article>
        <h2 className="text-2xl">
          ## What other services does firebase provide other than
          authentication?
        </h2>
        <p>
          A: There are many services that Firebase provides, the Most useful of
          they are Cloud Firestore, Cloud Functions, Hosting, Cloud Storage,
          Google Analytics, Predictions, Cloud Messaging.
        </p>
      </article>
    </section>
  );
};

export default Blogs;

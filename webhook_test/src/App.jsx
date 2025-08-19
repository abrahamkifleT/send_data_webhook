import React from "react";

import React from 'react';

function App() {
  const sendWebhook = async () => {
    try {
      const response = await fetch('https://webhook.site/1234abcd-5678-efgh', {
        // 👆 replace with your unique webhook.site URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer my-secret-token' // optional
        },
        body: JSON.stringify({
          event: 'user.signup',
          user: {
            id: 1,
            name: 'Abraham',
            email: 'abraham@example.com'
          }
        }),
      });

      console.log("Webhook sent!", await response.text());
    } catch (error) {
      console.error("Error sending webhook:", error);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Webhook Test</h1>
      <button onClick={sendWebhook}>Send Test Webhook</button>
    </div>
  );
}

export default App;




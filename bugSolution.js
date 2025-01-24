// bugSolution.js
import React from 'react';
import { Image } from 'expo-image';

export default function App() {
  const imageUri = 'https://via.placeholder.com/350x150'; // Valid image URI
  const [error, setError] = React.useState(null);

  return (
    <Image
      source={{ uri: imageUri }}
      style={{ width: 350, height: 150 }}
      onError={(e) => setError('Image loading failed')}
    />
  );
}
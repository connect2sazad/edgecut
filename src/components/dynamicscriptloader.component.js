import { useEffect } from 'react';

function DynamicScriptLoader({ scriptUrl }) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = scriptUrl;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts
      document.body.removeChild(script);
    };
  }, [scriptUrl]);

  return null;
}

export default DynamicScriptLoader;

import { useState } from "react";

interface RegisterFormProps {
  onSubmit: (data: { email: string; password: string }) => Promise<void>;
}

export const RegisterForm = ({ onSubmit }: RegisterFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    try {
      await onSubmit({ email, password });
      // Очищаем форму после успешной регистрации
      setEmail("");
      setPassword("");
    } catch (err) {
      setError("Ошибка при регистрации. Пожалуйста, попробуйте снова.");
      console.error("Ошибка регистрации", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
      <div style={{ marginBottom: '15px' }}>
        <input 
          value={email} 
          onChange={e => setEmail(e.target.value)} 
          placeholder="Email" 
          disabled={isLoading}
          style={{ width: '100%', padding: '8px' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <input 
          type="password" 
          value={password} 
          onChange={e => setPassword(e.target.value)} 
          placeholder="Пароль" 
          disabled={isLoading}
          style={{ width: '100%', padding: '8px' }}
        />
      </div>
      <button 
        type="submit" 
        disabled={isLoading}
        style={{ 
          width: '100%', 
          padding: '10px', 
          backgroundColor: '#4CAF50', 
          color: 'white', 
          border: 'none', 
          borderRadius: '4px',
          cursor: isLoading ? 'not-allowed' : 'pointer'
        }}
      >
        {isLoading ? 'Регистрация...' : 'Зарегистрироваться'}
      </button>
    </form>
  );
};

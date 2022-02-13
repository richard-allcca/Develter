import { colors } from "../../styles/theme";

export default function Button({ children }) {
  return (
    <>
      <button>{children}</button>
      <style jsx>{`
        button {
          background: ${colors.black};
          border: 0;
          color: #fff;
          cursor: pointer;
          display: flex;
          align-items: center;
          border-radius: 99px;
          font-size: 16px;
          font-weight: 800;
          padding: 8px 24px;
          transition: opacity 0.3s ease;
        }
        button > :global(svg) {
          margin-right: 0.625rem;
        }
        button:hover {
          opacity: 0.7;
        }
      `}</style>
    </>
  );
}

// Notas
// >:global(svg) --> permite detectar elementos dentro del componente al que le dame jsx styles

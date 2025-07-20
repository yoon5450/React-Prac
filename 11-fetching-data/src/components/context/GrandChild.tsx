import { useUserContext } from "@/hook/useUserContext";
import { useTheme } from "./ThemeContext";

function GrandChild() {
  const { userName, setUsername } = useUserContext();
  const {
    theme: { colors, spacing },
    toggleTheme,
  } = useTheme();

  return (
    <div
      style={{
        background: colors.background,
        color: colors.primary,
        border: "1px solid gray",
        padding: spacing.md,
      }}
    >
      <h4>바뀐다3333</h4>
      <p
        style={{
          marginBottom: spacing.lg,
        }}
      >
        <button
          type="button"
          onClick={toggleTheme}
          style={{ padding: spacing.md, margin: spacing.md }}
        >
          Change Theme
        </button>
        안녕하세요 {userName}
      </p>
      <button
        type="button"
        onClick={() => {
          setUsername("범쌤");
        }}
      >
        나도 사용자 변경
      </button>
    </div>
  );
}

export default GrandChild;

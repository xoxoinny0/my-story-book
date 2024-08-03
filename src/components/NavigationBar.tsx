import IconButton from "./IconButton";

interface NavigationBarProps {
  isDark: boolean;
  showTitle: boolean;
  title?: string;
  showBackButton: boolean;
  onBackButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
  showCloseButton: boolean;
  onCloseButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function NavigationBar({
  isDark,
  showTitle,
  title = "",
  showBackButton,
  onBackButtonClick = () => {},
  showCloseButton,
  onCloseButtonClick = () => {},
}: NavigationBarProps) {
  return (
    <div className="w-full flex justify-between">
      <div className="navigation-title-wrapper flex">
        {/* 뒤로가기 버튼 */}
        {showBackButton && (
          <IconButton alt="back-arrow" iconPath="/vite.svg" onClick={onBackButtonClick} />
        )}
        {/* 타이틀 */}
        {showTitle && (
          <h1 className={`text-2xl ${isDark ? "text-white" : "text-primary"}`}>{title}</h1>
        )}
      </div>
      {/* 닫기 버튼 */}
      {showCloseButton && (
        <IconButton alt="close" iconPath="/vite.svg" onClick={onCloseButtonClick} />
      )}
    </div>
  );
}

export const Button = ({
    icon = '',
    text = '',
    onClick = () => { },
    classComponent = '',
    color = '',
  }) => {
    const styleWidth = text.length === 0 ? 'p-2' : 'gap-3 px-3 py-2 pr-4';
    const buttonBackgroundClass = color ? '' : 'btn-primary_easystock';
  
    return (
      <button
        className={`flex justify-center items-start ${styleWidth} ${buttonBackgroundClass} rounded-lg ${classComponent} ${text}`}
        onClick={onClick}
      >
        <p className="text-button_easystock p-0">{text}</p>
        <i className={`bi bi-${icon}`}></i>
      </button>
    );
  };
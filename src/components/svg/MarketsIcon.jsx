
const MarketsIcon = (prop) => {
    let {fill} = prop
    return (
        <svg
            className={fill}
            width="16"
            height="18"
            viewBox="0 0 16 18"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                className={fill}
                id="Vector"
                d="M4.5 0H2.25V2.25H0V15.75H2.25V18H4.5V15.75H6.75V2.25H4.5V0ZM15.75 4.5H13.5V0H11.25V4.5H9V12.375H11.25V18H13.5V12.375H15.75V4.5Z"
            />
        </svg>

    )
}
export default MarketsIcon

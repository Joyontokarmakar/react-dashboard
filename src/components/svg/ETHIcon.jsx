
const ETHIcon = (prop) => {
    return (
        <div className={'wallet-icon '+(prop.bg)}>
            <svg
                width="12"
                height="18"
                viewBox="0 0 12 18"
                className={prop.fill}
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M5.52526 13.4765L0 10.2158L5.52189 18L11.05 10.2158L5.52189 13.4765H5.52526ZM5.60739 0L0.0843724 9.16678L5.60739 12.4331L11.1327 9.17015L5.60739 0Z"
                    className={prop.fill}
                />
            </svg>
        </div>
    )
}
export default ETHIcon

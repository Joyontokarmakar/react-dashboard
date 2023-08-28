
const SOLIcon = (prop) => {
    return (
        <div className={'wallet-icon '+(prop.bg)}>
            <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                className={prop.fill}
                xmlns="http://www.w3.org/2000/svg"
            >
                <g id="ic_sol">
                    <path
                        id="Vector"
                        d="M13.2103 5.99485H1.93781L4.78969 3.15141H16.0622L13.2103 5.99485Z"
                        className={prop.fill}
                    />
                    <path
                        id="Vector_2"
                        d="M13.2103 14.8486H1.93781L4.78969 12.0066H16.0622"
                        className={prop.fill}
                    />
                    <path
                        id="Vector_3"
                        d="M4.78969 10.4217H16.0622L13.2103 7.57828H1.93781"
                        className={prop.fill}
                    />
                </g>
            </svg>
        </div>
    )
}
export default SOLIcon

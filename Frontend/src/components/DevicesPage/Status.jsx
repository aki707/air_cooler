

export default function Status(  {connectionStatus} ) {
    function getStatus(connectionStatus) {
    return connectionStatus ? <a classname="green"> <svg> "WiFi.svg" </svg></a> : <a classname="red"> <svg> "WiFi.svg" </svg></a>;
    }

}

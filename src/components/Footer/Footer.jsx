import React from 'react';
import logo from "../../assets/img/logo.png"
import "./Footer.scss";

const Footer = () => {
  return (
    <div className='footer'>
      <img className="logo-header" src={ logo }/>
      <div>
        <p className='texto'>Formas de pago</p>
        <span><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAVJJREFUSEvtlNFxwkAMRLWdhEoSKgmpJKGSQCWBSpJOFL8bySMbzJ/xz3mGwfbdaXef7izb6NJGutaFn0a+o+6oVyOw/eZy9zcz4/caMa+SvriPsU8zu5rZn5m9c8+4u78M7w5l3VnSabbOJO0rvpvEIfKDgKRdFPg1MwRYjChCH2GCuVwYaj9JjGHYi9he0iWf7wkjgBAu5e6IfA80Lrh29zSBKcYg0cZqorIOM830Q+FwSgqwTxKCMFOEqdFkpKU4QqStlKh3zNa1UPe27UCI3pLkGP+ZPoVqG3gHEYwiCuZ8R6+pgYkJlSXhmgRvJ/pW8LXnGdpMyHv2QRphGvVGs4uJZ6h43IFwRoKNQtLsYSseidvmJGWYw8Skz4vn2N0pyuR6rPLYnKMw7WAOF0cNtDmHnjbhIAWF8aht/wFZ7du4ULgnfhrxjrqjXo3AZpvrH2wRnB8D6GzSAAAAAElFTkSuQmCC"/></span>
        <span><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAX9JREFUSEvtlt1RwzAQhO8qgVQCqQSoBFIJoRKSSgiVHP40J48s68fJZPCL7y3WSnu7WklRWal0JV7ZiP/N+c3qidVm9igiryLy4AO/InIavl1U9RLBZgYGLDgw1ElVwRaraLUTfg6TnyvzIH2jARH5dtIS9Cgih7TJCJoRO+lPJ2UoOTvmpUEMJDSZq58QO2lLwbiQK+X3frAYd7C6VpDvU+U58YeIvHfUHgqY0rd8GSxn/VAj8UKLmVMiYb9puKWaubuoOiUmSNjcKiz7KigmRMzvEWN3SHpKvNTmp0LawxHzo9dqnJDR5ISYs0hIWlVTVnOius/XWl1Txr6XnMiJ51aDMDPOb2+fbk216BDrWaqdeMk+5+c23mK9YB5VlfRPj1P8sEA1RFgeU8xivWxwt+9S32tXZu/2Csn0B+Gqva0qTpSjgqTXCgXkoXVdTuxtKk4HzSzamT552BYVB7jjwMbnkweEZ3F8OvPut38gnYvrfsOb1ffzsrPSalb/AXv/hB8NmBY5AAAAAElFTkSuQmCC"/></span>
        <span><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAXdJREFUSEvlloFNAzEMRf0ngU4CnQQ6CTAJ3aTtJJRJzP1TgtL0YjuRTodEpOpOuiQvtr9/CtloYCOu/G2wqj57mQFw9uaU392IVfVTRF4Dm15FhPAPAHw3RwT8JSKP3kbFd0L3HnwNMM9wBrC3DhsBa0e0eeoVwG4YnER1GgBzyc5KtxmxqlJUFNfImCNuwT1wVNF3BwMAdgSAw9Kp1wIfJ2VfUrao8Lse98C9rTQHl6LNaw8AeJCb4YFHFM02eilMpw88oGgaR65n2Qnd4JaiCciWyOd3skq+c83bjScDi1ltplpV3+tNaIUJmi2UT/4eGn5+7Fb10uWQRBOtu+leVsS1ossW8Qxlrrd1VVrgOjIPnGt/mcrKMvVfi6rKujHiclCxT3UtmX4PEnauhkcTTMWWd3NTPN5hFk/bANP02Z+rg+k+v4MXu049Vqd/yQ69aGdbjUzinFb6twKbl70VVE/E2aXyfjQI999kCx4GR0sSnff/wD/Kyp4fbx4npwAAAABJRU5ErkJggg=="/></span>
    </div>
    </div>
  )
}

export default Footer;
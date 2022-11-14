import "../../styles/template/template.css"

export const Footer = ({ isDashboardOpen }) => {
    return <>
        {
            isDashboardOpen ?
                <div className="footer-dashboard">
                    <img style={{ height: "30px", width: "auto" }} src="/images/templates/copyright.png" />
                </div>
                :
                <div className="width footer-color">
                    <div className="footer">
                        <div className="flex" style={{ justifyContent: "space-around", width: "100%" }}>
                            <div className="footer-links">
                                <h1>COMPANY</h1>
                                <h3>About Us</h3>
                                <h3>Careers</h3>
                                <h3>Partners</h3>
                            </div>
                            <div>
                                <h1>COURSES</h1>
                                <div className="footer-links">
                                    <h3>Register</h3>
                                    <h3>Login</h3>
                                    <h3>Projects</h3>
                                    <h3>Teachers</h3>
                                    <h3>Parents</h3>
                                    <h3>Resources</h3>
                                </div>
                            </div>
                            <div>
                                <h1>SUPPORT</h1>
                                <div className="footer-links">
                                    <h3>FAQs</h3>
                                    <h3>Helpdesk</h3>
                                    <h3>Contact Us</h3>
                                </div>
                            </div>
                            <div>
                                <h1>LEGAL</h1>
                                <div className="footer-links">
                                    <h3>Terms & Conditions</h3>
                                    <h3>Privacy Policy</h3>
                                </div>
                            </div>
                            <div>
                                <h1>LevelUp Works</h1>
                            </div>
                        </div>
                    </div>

                </div>
        }
    </>
}
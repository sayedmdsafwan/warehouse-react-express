import React from "react";
import inventoryImg from "../../images/inventory.jpeg";
import goalImg from "../../images/goal.jpeg";

const Story = () => {
    return (
        <div className="pt-5">
            <div className="row">
                <div className="col-md-4">
                    <img src={inventoryImg} alt="" className="img-fluid" />
                </div>
                <div className="col-md-8 px-5 d-flex justify-content-center flex-column">
                    <h6 className="text-uppercase text-danger">
                        Why we are best?
                    </h6>
                    <h3 className="display-6">Our Story</h3>
                    <p className="lead">
                        At Fruit NINJA, we have the experience in providing a
                        comprehensive range of management services.{" "}
                    </p>
                    <p className="lead">
                        Our expertise has the ability to enhance the overall
                        efficiency and effectiveness of your ASC to help
                        providers and facilities improve their financial
                        performances. Our clients are very important to us and
                        we take great pride in our customer service whether it
                        is during the implementation process, day to day
                        interaction, or when we are communicating with patients
                        on the your behalf.{" "}
                    </p>
                    <p className="lead">
                        Throughout the implementation process we will guide you
                        through every aspect making the transition as seamless
                        as possible.
                    </p>
                    <p className="lead">
                        We generate clear monthly reports for review which give
                        a summary of the key performance indicators of the
                        facility so the physicians can quickly review the entire
                        surgery center finances and its operations. Our team is
                        passionate about what we do which is reflected in our
                        performance.
                    </p>
                </div>
            </div>
            <div className="row pt-5">
                <div className="col-md-8 px-5 d-flex justify-content-center flex-column">
                    <h6 className="text-uppercase text-danger">
                        Why choose us?
                    </h6>
                    <h3 className="display-6">Our goal</h3>
                    <p className="lead">
                        At Fruit NINJA, we always try to give you the best
                        service. We have clients all over the world{" "}
                    </p>
                    <p className="lead">
                        Our experts always works for the customer who buys from
                        us. We have ability to enhance the overall efficiency
                        and effectiveness of your ASC to help providers and
                        facilities improve their financial performances. Our
                        clients are very important to us and we take great pride
                        in our customer service whether it is during the
                        implementation process{" "}
                    </p>
                    <p className="lead">
                        Throughout the implementation process we will guide you
                        through every aspect making the transition as seamless
                        as possible.
                    </p>
                </div>
                <div className="col-md-4">
                    <img src={goalImg} alt="" className="img-fluid" />
                </div>
            </div>
        </div>
    );
};

export default Story;

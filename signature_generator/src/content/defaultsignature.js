import { Row, Col, Image, Button, message } from "antd";
import React from "react";

const DefaultSignature = (props) => {
    const outputString = `
        <html>
        <head>
            <style type="text/css">
                #container a
    {color: rgb(85, 26, 139);}
    #container
    {font-family: "Segoe UI"; font-size: 9.8pt; background-color: rgb(255, 255, 255); color: rgb(102, 102, 102); margin-left: 0px; margin-right: 8px;}
    .EmpName
    {font-size: 11pt; color: #800000; font-weight: bold;}
    .EmpContact
    {font-size: 9.8pt; color: #666666;}
    #footer
    {color: #808080; line-height: 1.6;}
            </style>
        </head>
        <body>
            
            <div id="container">
                <div id="id-a0456a50-0605-4979-b071-3833002257f0" class="ms-outlook-mobile-reference-message">
                    <div name="BB10" dir="auto" style="background-image:initial;line-height:initial;outline:none;">
                        <div id="ssc67696">
                            <table class="MsoNormalTable" border="0" cellspacing="0" cellpadding="0" summary="" style="width: 321px;">
                                <tbody>
                                    <tr>
                                        <td style="width: 200px; padding: 1.5pt;">
                                            <div>
                                                <p class="MsoNormal">
                                                        <span class="EmpName">${props.fullname}</span>
                                                        <br/>
                                                        <span class="EmpContact">
                                                        ${props.designation}<br/>
                                                        Office:
                                                            <a href="tel:+14169234425,,{Extension}">+1 (416) 923-4425 x ${props.extension}</a>
                                                            <br/>
                                                    <a href="https://augsignals.com">www.augsignals.com</a>
                                                    </span>
                                                </p>
                                            </div>
                                        </td>
                                        <td style="width: 67px; padding: 1pt;">
                                            <p class="MsoNormal" style="text-align: center; ">
                                                <img border="0" id="_x0000_i1025" alt="A.U.G. Logo" src="https://augsignals.com/wp-content/uploads/logo/aug-logo-200x110.jpg" height="60"/>
                                            </p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div id="footer">
                            <hr/>
                            NOTICE: Confidential message which may be privileged. Unauthorized use/disclosure prohibited. If received in error, please notify the sender immediately and delete all copies and attachments.
                            <br/>
                            AVIS : Message confidentiel dont le contenu peut être privilégié. Utilisation/divulgation interdites sans permission. Si reçu par erreur, prière d'aviser immédiatement l'expéditeur et supprimer toutes les copies et les pièces jointes.	
                        </div>
                    </div>
                </div>
            </div>
            
        </body>
    </html>
    `;
    return (
        <>
            <Row gutter={[8,8]} align="middle">
                <Col span={8}>
                    <h1 className="fullname">
                        {props.fullname}
                    </h1>
                    <h1 className="designation">
                        {props.designation}
                    </h1>
                    <p>Office: +1 416 923 4425 ext. {props.extension}</p>
                    <p>Fax: +1 877 756 4628</p>
                    <p>Email:{props.email}</p>
                    <a href="https://airsence.com/">https://airsence.com/</a>
                    <br/>
                </Col>
                <Col span={8}>
                    <Image preview={false} className="auglogo" height="200px" width="350px" src="https://augsignals.com/wp-content/uploads/logo/aug-logo-200x110.jpg"/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <hr />
                    <p>
                        NOTICE: Confidential message which may be privileged. Unauthorized use/disclosure prohibited. If received in error, please notify the sender immediately and delete all copies and attachments.
                    </p>
                    <p>
                        AVIS : Message confidentiel dont le contenu peut être privilégié. Utilisation/divulgation interdites sans permission. Si reçu par erreur, prière d'aviser immédiatement l'expéditeur et supprimer toutes les copies et les pièces jointes.
                    </p>
                </Col>
            </Row>
            <Button onClick={() => {
                navigator.clipboard.writeText(outputString)
                message.info("Copied!")
            }}>
                Copy to Clipboard
            </Button>
        </>
    );
};

export default DefaultSignature;
import { Row, Col, Image, Button, message } from "antd";
import React from "react";
import { 
    LinkedinOutlined,
    FacebookOutlined,
    TwitterOutlined,
    YoutubeOutlined,
} from '@ant-design/icons';

const ShortSignature = (props) => {
    const outputString = `
        <html>
        <head>
            <style type="text/css">
                #xd5d12c2c4d024f91bf101a222428a69c:empty::before
    {content: attr(placeholder); color: rgb(202, 202, 202);}
    #xdc5f36aa2a894b73abd34b98610a73a6 p.MsoNormal, #x5a37f54ea8964c03b9c8bbc2093ddeeb p.MsoNormal
    {margin: 0cm; font-size: 11pt; font-family: Calibri, sans-serif;}
    #xdc5f36aa2a894b73abd34b98610a73a6 a:link, #x5a37f54ea8964c03b9c8bbc2093ddeeb a:link
    {color: rgb(5, 99, 193); text-decoration: underline;}
    #xdc5f36aa2a894b73abd34b98610a73a6 a:visited, #x5a37f54ea8964c03b9c8bbc2093ddeeb a:visited
    {color: purple; text-decoration: underline;}
    
            </style>
        </head>
        <body>
            
            
            <div id="x5a37f54ea8964c03b9c8bbc2093ddeeb" style="tab-interval:36.0pt;&#xD;&#xA;word-wrap:break-word"><div id="xdc5f36aa2a894b73abd34b98610a73a6" style="tab-interval:36.0pt;&#xD;&#xA;word-wrap:break-word">

                    <table class="MsoTableGrid" border="0" cellspacing="0" cellpadding="0" style="width: 344px; border-width: initial; border-style: none; border-color: initial;" xmlns="http://www.w3.org/TR/REC-html40" height="94">
                        <tbody><tr style="height: 45px;">
                                <td valign="top" style="width: 236px; padding: 0cm 5.4pt; height: 45px;">
                                    <p class="MsoNormal"><a name="_Hlk64566052"><b><span lang="EN-US" style=""><font face="Segoe UI" style=""><font style="font-size: 12pt;" size="3" color="#800040">${props.fullname}</font><span style="font-size: 12pt;"><o:p xmlns:o="urn:schemas-microsoft-com:office:office"/></span></font></span></b></a></p>
                                    <p class="MsoNormal"><span lang="EN-US" style=""><font face="Segoe UI" size="2" style="font-size: 10pt;" color="#666666">${props.designation}</font><font color="#7f7f7f" style="font-weight: bold;"><o:p xmlns:o="urn:schemas-microsoft-com:office:office"/></font></span></p><p class="MsoNormal"><span lang="EN-US" style=""><font color="#666666" face="Segoe UI" style="font-size: 4pt;" size="1"><br/></font></span></p><p class="MsoNormal" style="background-color: rgba(0, 0, 0, 0); font-size: 4pt;"><span lang="EN-US"><font face="Segoe UI" color="#666666" style="font-size:13px;">Office: +1 416 923 4425 ext. ${props.extension}</font></span></p><p class="MsoNormal"><span lang="EN-US"><span>
                                            </span></span></p><p class="MsoNormal" style="background-color:rgba(0,0,0,0);"><span lang="EN-US"><a href="https://airsence.com/"><font face="Segoe UI" style="font-size:10pt;">https://airsence.com/</font></a></span></p>
                                </td>
    
                                <td valign="top" style="width: 169px; padding: 0cm 5.4pt; height: 45px;">
                                    <p class="MsoNormal" align="center" style="text-align: center;"><img border="0" width="102" height="57" src="https://augsignals.com/wp-content/uploads/logo/airsence-logo-234x130.png" alt="AirSENCE logo" v:shapes="Picture_x0020_25" style="background-color: rgba(0, 0, 0, 0);" xmlns:v="urn:schemas-microsoft-com:vml"/></p><p class="MsoNormal" align="center" style="text-align: center; padding-top: 4pt;"><a href="http://www.linkedin.com/in/airsence-augsignals" style="background-color: rgba(0, 0, 0, 0);"><span lang="EN-US" style="text-decoration-line:none;"><img border="0" width="18" height="18" src="data:image/png;base64,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" alt="Title: LinkedIn - Description: LinkedIn icon" v:shapes="Picture_x0020_1" xmlns:v="urn:schemas-microsoft-com:vml"/></span></a><span lang="EN-US" style="color: rgb(42, 42, 42); background-color: rgba(0, 0, 0, 0);">&ensp;</span><a href="https://www.facebook.com/AUG-Signals-230943220403645/" style="background-color: rgba(0, 0, 0, 0);"><span lang="EN-US" style="color:windowtext;text-decoration-line:none;"><img border="0" width="18" height="18" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAARLSURBVEhLtZZbaBxVGMf/iTWNihdQKRZJWhKpiBeSvcxe0s7OnDO7mzQNuW1U0Ad98KFgsjuTkEAfVhQtKr6K+CS+1Ae1gqBo1CZ7SSzabhSrUm1rtGtjK92I+NIWx/9sJlMf1rabxD98Ozuz35nf+S7n7EFytChkeu6AMIslYRUWhJkvbawVFqRVpBUOGlZuGIaZe0ea+SXCzkqz8JPM5K/dzOJJac7/eNnmTvAdp2r4nuHz38k5DH58Jaz8OT2Tf0VMzg7pE7n+2Hhh6EomrflBY/zwgMgUhoyxmZQYm35YH/3oEZn+dERnFKt++nh+QJ841C/N3D5Cz5G1DCdkkcktOjA1m90E225A1m68otEnlUo1qeqt28Ja8y5Fa+rza02DAdEcfkhtve2yb7bqG0t/FhXpHDNSqBCYLzlhO5HhGhUK4YaQjmBQw0RQxxsBiQ+CBj7xC+xXFNzjunmKWTlFZPJMdeG8B3RSUJ3VVdSexGZFoitk4NVgHMeVOP5UkrgY6cGlYAKzioou19WTZhYjawZGkmgLSmQJOhHZDTvcA9u5dvXCJnguoGGX6+pp7cAsGqMCMcXAewReIOBvRvUDI51mSt/nRJ7zqbjX9fa0ZqCqYhNTOUDgfCgBm7Wr+HW8zlrGHVA0ihZfL26ka8PKiBXVC2xoVdEcTOKWTg1t/jjSAQPHHCAjOkPg/oiGHVlOJpVCE+06d5yn+oB8QadTtzj6A3Hs8zOdvC7x3g4KRijxIcHPhg2MspkGOxO4yx3pqS6g7ylcH0ggwRq9RcipUBLLvF7kvc1InWsl1I2l6G6UlQQOdsaguEM91QW8j2kKSYwwiiNON0b3wK6mk0DHwknYO/thx4bZpQkc86uQ7lBP9aWUEXJBy4DAm6zjcb70PEEXnJSyaS6xgSrhbpS5PBb57N11R0g1PmhgO2u3xycxScjbBJarNTSwHNAxTXuJ62/Kp+HRB1Tc7Y7zVC+wurvs6MPNHRpaFYG9TG+JkTlNU+YEXgyo8HNL28KlcUd7Oza7wzzVDVyV0/JOJxL0eRVoYJEbwJSiY4vrUlPrATaxYUYI+iK0ktKfnaUSkdjqutTUmoGs5U2M7DGCjrJ5nGVxmhtBlrVtcV1qal1A1u/xag1XgGWfwDM+bmmuS02tL0KJJ9go3zn/Eoz0LIHPd4TR6rrU1JqBhhOhwJMEfl8FJvAbJ/BC9P9KaZLLIywhCHyN0c0QeCDCmnZ14U7XpaZqAjUrP3g1YJabgBC4nZvA/X4NER4zOiN92Opsf65LTYmxQvhfQJ4bebQT5qFe9/cNl3h6poPAkzJTrEA381/z+HZaWMW92nihTU5+2WJYs9v/y3bS5OQ3Laumjs1vq+XnWI91pNV5n57ODfNI+QsDWwZPxB8zrX/I8eISD7Y8zG68CXOuTOBfzOa30K28xS+/JqdKdqJqRzfYSnb31IJNRkVkci//A8MYgmBi2bzHAAAAAElFTkSuQmCC" alt="Title: Facebook - Description: facebook icon" v:shapes="Picture_x0020_2" xmlns:v="urn:schemas-microsoft-com:vml"/></span></a><span lang="EN-US" style="color: rgb(42, 42, 42); background-color: rgba(0, 0, 0, 0);">&ensp;</span><a href="https://twitter.com/theAirSENCE" style="background-color: rgba(0, 0, 0, 0);"><span lang="EN-US" style="color:windowtext;text-decoration-line:none;"><img border="0" width="18" height="18" src="data:image/png;base64,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" alt="Title: Twitter - Description: Twitter icon" v:shapes="Picture_x0020_3" xmlns:v="urn:schemas-microsoft-com:vml"/></span></a><span lang="EN-US" style="color: rgb(42, 42, 42); background-color: rgba(0, 0, 0, 0);">&ensp;</span><a href="https://youtu.be/gfRSVAQeTZI" style="background-color: rgba(0, 0, 0, 0);"><span lang="EN-US" style="color:windowtext;text-decoration-line:none;"><img border="0" width="18" height="18" src="data:image/png;base64,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" alt="Title: YouTube - Description: Youtube icon" v:shapes="Picture_x0020_4" xmlns:v="urn:schemas-microsoft-com:vml"/></span></a><span lang="EN-US" style="color: rgb(42, 42, 42); background-color: rgba(0, 0, 0, 0);"> </span></p>
                                </td>
    
                            </tr>
    
                        </tbody></table><hr id="null"/></div><div id="xdc5f36aa2a894b73abd34b98610a73a6" style="tab-interval:36.0pt;&#xD;&#xA;word-wrap:break-word"><div id="xd5d12c2c4d024f91bf101a222428a69c"><span style="color: rgb(128, 128, 128); background-color: rgba(0, 0, 0, 0); font-size: 13px; text-decoration-style: solid; text-decoration-color: rgb(128, 128, 128);">NOTICE:
                                                                        Confidential message which may be privileged. Unauthorized use/disclosure
                                                                        prohibited. If received in error, please notify the sender immediately and
                                                                        delete all copies and attachments.					</span><br style="color: rgb(128, 128, 128); background-color: rgba(0, 0, 0, 0); font-size: 13px; text-decoration-style: solid; text-decoration-color: rgb(128, 128, 128);"/></div></div></div>
        
        
        </body>
    </html>
    `;
    return (
        <>
            <Row gutter={[8,8]}>
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
                    <Image preview={false} className="airsencelogo" height="180px" width="280px" src="https://augsignals.com/wp-content/uploads/logo/airsence-logo-234x130.png"/>
                    <Button type="text" href="http://www.linkedin.com/in/airsence-augsignals">
                        <LinkedinOutlined />
                    </Button>
                
                    <Button type="text" href="https://www.facebook.com/AUG-Signals-230943220403645/">
                        <FacebookOutlined />
                    </Button>
                
                    <Button type="text" href="https://twitter.com/theAirSENCE">
                        <TwitterOutlined />
                    </Button>
                
                    <Button type="text" href="https://youtu.be/gfRSVAQeTZI">
                        <YoutubeOutlined />
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <hr />
                    <p>
                        NOTICE: Confidential message which may be privileged. Unauthorized use/disclosure prohibited. If received in error, please notify the sender immediately and delete all copies and attachments.
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

export default ShortSignature;
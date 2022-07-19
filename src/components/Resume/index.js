import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';


function Resume() {

    return (
        <Container className="topMar">

            <Row>
                <Col><h2>My Resume</h2></Col>
                <Col>
                    {/* perhaps a modal that confirms download w/ thumbnail of resume  */}
                    {/* Maybe another Contact button. */}
                    <Button className="flRight" variant="info">Download</Button>
                </Col>
                
            </Row>

            <Row>
                {/* actual Resume goes here */}
                <p>
                orem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum risus a sapien convallis, ut hendrerit felis malesuada. Integer lacinia, tellus vitae varius pellentesque, massa nunc dignissim odio, imperdiet imperdiet eros tellus sit amet arcu. Donec rhoncus molestie gravida. Nunc rutrum metus non neque aliquet maximus. Suspendisse potenti. Nam sit amet enim ac leo malesuada tincidunt. Donec sit amet sollicitudin risus. Donec bibendum quam sed sodales dictum. Quisque sagittis suscipit massa nec hendrerit. Suspendisse purus ex, commodo ac dictum at, convallis vitae dolor. Integer facilisis lacus a nulla varius placerat. Ut eget nisi cursus augue pellentesque sollicitudin. Donec sed venenatis tortor. Donec placerat felis id placerat sagittis.

Quisque vitae purus sed odio suscipit gravida. Nullam ut neque quis ipsum lacinia dictum eget a massa. Aliquam fermentum sed justo vel feugiat. Phasellus suscipit, felis et dictum imperdiet, lorem lacus euismod erat, quis tempor massa lorem eu enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce ac sollicitudin enim. Pellentesque sed fringilla lectus, sit amet tincidunt nibh. Integer tempor, mauris vitae luctus lobortis, neque turpis pharetra justo, sit amet aliquet purus mauris ut turpis. Fusce tincidunt purus consequat ex tristique placerat.

Pellentesque efficitur pulvinar metus, ac hendrerit nunc mattis at. Vestibulum nisi est, venenatis at nibh in, rutrum accumsan mi. Vestibulum mattis, augue eget porta tempus, mauris purus cursus lorem, finibus fermentum ipsum nulla eu ipsum. Duis risus risus, vulputate quis elit vitae, varius tempor ante. Praesent enim enim, elementum vitae arcu quis, placerat faucibus arcu. Quisque elementum vulputate nisl in porttitor. Integer turpis erat, hendrerit vel sodales et, vulputate at velit. Proin blandit purus eget pharetra sodales. Curabitur posuere nisl odio, eget bibendum mauris elementum tristique. In in leo eget purus eleifend efficitur ut at mi.

Praesent egestas sollicitudin mi, sed auctor lacus ullamcorper ac. Praesent molestie tortor eget orci gravida, eget tempor orci bibendum. Mauris vulputate dignissim varius. Phasellus tincidunt luctus nibh, eget egestas tortor eleifend et. Vivamus laoreet eu ipsum eu tincidunt. Ut quis quam lacinia, facilisis risus at, commodo ante. Aliquam elementum, ex quis volutpat dictum, nunc velit luctus dui, ac porta lacus dolor quis tellus. Nulla non pharetra est. Donec ultrices ex ligula, non dignissim enim mollis interdum. Aenean mauris felis, auctor a dui non, faucibus fermentum est. Pellentesque et placerat tortor.

Etiam dignissim turpis at diam sodales imperdiet sed volutpat leo. Sed laoreet luctus arcu, sed semper orci gravida ac. Maecenas in nunc sed quam pharetra dictum et vitae ante. Donec fringilla felis ut turpis tempus facilisis. Pellentesque a vestibulum nisl. In magna quam, sollicitudin sed nisi in, pharetra sagittis libero. Pellentesque vitae gravida arcu. Vestibulum sagittis nibh a erat consectetur porttitor. Pellentesque id congue leo. Donec est quam, commodo ac urna nec, malesuada pretium velit. Praesent vel nisi purus. Etiam mattis sapien velit, sed convallis urna placerat vitae. Vestibulum quis euismod risus. Donec pellentesque maximus iaculis. Aliquam in neque mattis, finibus arcu nec, vulputate nulla. Proin nunc nunc, ornare non velit ut, congue tincidunt urna.
                </p>
            </Row>
        </Container>
    )
}

export default Resume;
import React from "react";
import { useHistory } from "@docusaurus/router";
import { Button, Col, Row, Collapse, Timeline } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import styles from "./index.module.css";
import htmlIcon from '/static/img/landing_page/html_icon.png';
import cssIcon from '/static/img/landing_page/css_icon.png';
import jsIcon from '/static/img/landing_page/js_icon.png';
import nodejsIcon from '/static/img/landing_page/nodejs_icon.png';
import reactjsIcon from '/static/img/landing_page/reactjs_icon.png';
import nextjsIcon from '/static/img/landing_page/nextjs_icon.png';
import nestjsIcon from '/static/img/landing_page/nestjs_icon.png';
import awsIcon from '/static/img/landing_page/aws_icon.png';
import dockerIcon from '/static/img/landing_page/docker_icon.png';
import k8sIcon from '/static/img/landing_page/k8s_icon.png';
import argocdIcon from '/static/img/landing_page/argocd_icon.png';
import terraformIcon from '/static/img/landing_page/terraform_icon.png';
import ansibleIcon from '/static/img/landing_page/ansible_icon.png';
import githubactionIcon from '/static/img/landing_page/ga_icon.png';
import gitIcon from '/static/img/landing_page/git_icon.png';
import jenkinsIcon from '/static/img/landing_page/jenkins_icon.png';
import helmIcon from '/static/img/landing_page/helm_icon.png';
import prometheusIcon from '/static/img/landing_page/prometheus_icon.png';
import grafanaIcon from '/static/img/landing_page/grafana_icon.png';
import techseoulIcon from '/static/img/tech_seoul_icon.png';


const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const items = [
  {
    key: '1',
    label: 'This is panel header 1',
    children: <p>{text}</p>,
  },
  {
    key: '2',
    label: 'This is panel header 2',
    children: <p>{text}</p>,
  },
  {
    key: '3',
    label: 'This is panel header 3',
    children: <p>{text}</p>,
  },
];

export const TechSeoulComponent = ({config}) => {

    const history = useHistory();

    console.log('siteConfig:', config);

    return (
        <>
            <Row justify={'center'}>
                <Col span={20} className={styles.main_image} >
                  <img src={techseoulIcon} alt="tech_seoul" />
                </Col>
                <Col span={20} className={styles.landing_page_title_box}>
                    <div className={styles.landing_page_title}>TECH SEOUL</div>
                    <div className={styles.landing_page_subtitle}>현수의 기술 블로그</div>
                    <Button size="large" onClick={() => {history.push('/docs/intro')}} className={styles.landing_page_getting_started_button}>시작하기</Button>
                    <Row gutter={24} justify={'center'}  className={styles.tech_icon_box}>
                        <Col xs={3} sm={3} md={2} lg={2} xl={1}><img src={htmlIcon} alt="html" /></Col>
                        <Col xs={3} sm={3} md={2} lg={2} xl={1}><img src={cssIcon} alt="css" /></Col>
                        <Col xs={3} sm={3} md={2} lg={2} xl={1}><img src={jsIcon} alt="js" /></Col>
                        <Col xs={3} sm={3} md={2} lg={2} xl={1}><img src={nodejsIcon} alt="node" /></Col>
                        <Col xs={3} sm={3} md={2} lg={2} xl={1}><img src={reactjsIcon} alt="react" /></Col>
                        <Col xs={3} sm={3} md={2} lg={2} xl={1}><img src={nextjsIcon} alt="next" /></Col>
                        <Col xs={3} sm={3} md={2} lg={2} xl={1}><img src={nestjsIcon} alt="nest" /></Col>
                        <Col xs={3} sm={3} md={2} lg={2} xl={1}><img src={awsIcon} alt="aws" /></Col>
                        <Col xs={3} sm={3} md={2} lg={2} xl={1}><img src={dockerIcon} alt="docker" /></Col>
                        <Col xs={3} sm={3} md={2} lg={2} xl={1}><img src={k8sIcon} alt="k8s" /></Col>
                        <Col xs={3} sm={3} md={2} lg={2} xl={1}><img src={argocdIcon} alt="argocd" /></Col>
                        <Col xs={3} sm={3} md={2} lg={2} xl={1}><img src={terraformIcon} alt="terraform" /></Col>
                        <Col xs={3} sm={3} md={2} lg={2} xl={1}><img src={ansibleIcon} alt="ansible" /></Col>
                        <Col xs={3} sm={3} md={2} lg={2} xl={1}><img src={prometheusIcon} alt="prometheus" /></Col>
                        <Col xs={3} sm={3} md={2} lg={2} xl={1}><img src={grafanaIcon} alt="grafana" /></Col>
                        <Col xs={3} sm={3} md={2} lg={2} xl={1}><img src={helmIcon} alt="helm" /></Col>
                        <Col xs={3} sm={3} md={2} lg={2} xl={1}><img src={jenkinsIcon} alt="jenkins" /></Col>
                        <Col xs={3} sm={3} md={2} lg={2} xl={1}><img src={gitIcon} alt="git" /></Col>
                        <Col xs={3} sm={3} md={2} lg={2} xl={1}><img src={githubactionIcon} alt="github_action" /></Col>
                    </Row>
                </Col>
            </Row>
            {/*<Row justify={'center'}>
                <Col span={10}>
                    <div>제목</div>
                    <div>본문</div>
                </Col>
                <Col span={10}>
                    <div>제목</div>
                    <div>본문</div>
                </Col>
            </Row>*/}
        </>
    );
};

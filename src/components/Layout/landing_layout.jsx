import React from "react";
import { useHistory } from "@docusaurus/router";
import { Button, Col, Row } from 'antd';
import styles from "./index.module.css";
import htmlIcon from '/static/img/landing_page/html_icon.png';
import cssIcon from '/static/img/landing_page/css_icon.png';
import jsIcon from '/static/img/landing_page/js_icon.png';
import nodejsIcon from '/static/img/landing_page/nodejs_icon.png';
import reactjsIcon from '/static/img/landing_page/reactjs_icon.png';
import nextjsIcon from '/static/img/landing_page/nextjs_icon.png';
import svelteIcon from '/static/img/landing_page/svelte_icon.png';
import nestjsIcon from '/static/img/landing_page/nestjs_icon.png';
import tauriIcon from '/static/img/landing_page/tauri_icon.png';
import awsIcon from '/static/img/landing_page/aws_icon.png';
import dockerIcon from '/static/img/landing_page/docker_icon.png';
import k8sIcon from '/static/img/landing_page/k8s_icon.png';
import k3sIcon from '/static/img/landing_page/k3s_icon.png';
import argocdIcon from '/static/img/landing_page/argocd_icon.png';
import terraformIcon from '/static/img/landing_page/terraform_icon.png';
import ansibleIcon from '/static/img/landing_page/ansible_icon.png';
import githubactionIcon from '/static/img/landing_page/ga_icon.png';
import gitIcon from '/static/img/landing_page/git_icon.png';
import jenkinsIcon from '/static/img/landing_page/jenkins_icon.png';
import helmIcon from '/static/img/landing_page/helm_icon.png';
import prometheusIcon from '/static/img/landing_page/prometheus_icon.png';
import grafanaIcon from '/static/img/landing_page/grafana_icon.png';
import piIcon from '/static/img/landing_page/raspberrypi_icon.png';
import javaIcon from '/static/img/landing_page/java_icon.png';
import springIcon from '/static/img/landing_page/spring_icon.png';
import pythonIcon from '/static/img/landing_page/python_icon.png';
import fastapiIcon from '/static/img/landing_page/fastapi_icon.png';
// import techseoulIcon from '/static/img/tech_seoul_icon.png';
import gobongbapIcon from '/static/img/gobongbap_landing.png';

const icons = [
  {src: htmlIcon, alt: 'html'},
  {src: cssIcon, alt: 'css'},
  {src: jsIcon, alt: 'js'},
  {src: nodejsIcon, alt: 'nodejs'},
  {src: reactjsIcon, alt: 'reactjs'},
  {src: nextjsIcon, alt: 'nextjs'},
  {src: svelteIcon, alt: 'svelte'},
  {src: nestjsIcon, alt: 'nestjs'},
  {src: tauriIcon, alt: 'tauri'},
  {src: awsIcon, alt: 'aws'},
  {src: dockerIcon, alt: 'docker'},
  {src: k8sIcon, alt: 'k8s'},
  {src: k3sIcon, alt: 'k3s'},
  {src: argocdIcon, alt: 'argocd'},
  {src: terraformIcon, alt: 'terraform'},
  {src: ansibleIcon, alt: 'ansible'},
  {src: githubactionIcon, alt: 'githubaction'},
  {src: gitIcon, alt: 'git'},
  {src: jenkinsIcon, alt: 'jenkins'},
  {src: helmIcon, alt: 'helm'},
  {src: prometheusIcon, alt: 'prometheus'},
  {src: grafanaIcon, alt: 'grafana'},
  {src: piIcon, alt: 'raspberry pi'},
  {src: javaIcon, alt: 'java'},
  {src: springIcon, alt: 'spring'},
  {src: pythonIcon, alt: 'python'},
  {src: fastapiIcon, alt: 'fastapi'}
]

export const LandingComponent = ({config}) => {

    const history = useHistory();

    return (
        <>
            <Row justify={'center'}>
                <Col span={20} className={styles.main_image} >
                  <img src={gobongbapIcon} alt="gobongbap" />
                </Col>
                <Col span={20} className={styles.landing_page_title_box}>
                  <div className={styles.landing_page_title}>{config.title}</div>
                  <div className={styles.landing_page_subtitle}>{config.tagline}</div>
                  <Button size="large" onClick={() => {history.push('/docs/category/html')}} className={styles.landing_page_getting_started_button}>시작하기</Button>
                </Col>
                <Col xs={18} sm={16} md={12} className={styles.landing_page_title_box}>
                  <Row gutter={24} justify={'center'}  className={styles.tech_icon_box}>
                      {
                        icons.map(({src, alt}) => (<Col xs={4} sm={4} md={3} lg={3} xl={3} xxl={2}><img src={src} alt={alt} /></Col>))
                      }
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

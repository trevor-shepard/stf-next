import App from "next/app";
import React from "react";
import Layout from "../src/components/Layout";
import "../src/styles/global.css";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
}

export default MyApp;

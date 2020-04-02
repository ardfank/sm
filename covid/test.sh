#!/bin/bash
# This script detects platform and architecture, download and install matching Deep Security Agent package
 if [[ $(/usr/bin/id -u) -ne 0 ]]; then echo You are not running as the root user.  Please try again with root privileges.;
    logger -t You are not running as the root user.  Please try again with root privileges.;
    exit 1;
 fi;
 if !(type curl &>/dev/null); then echo Please install CURL before running this script; 
    logger -t Please install CURL before running this script; exit 1;
 fi;
SOURCEURL='https://dsmgr.smig.corp:4119'
curl $SOURCEURL/software/deploymentscript/platform/linux/ -o /tmp/DownloadInstallAgentPackage --insecure --silent

if [ -s /tmp/DownloadInstallAgentPackage ]; then
   if echo 'F6CBD732AA3AD1A191E4ACA8D091D7E6062C6DD577E6784C69DBF26489A8BCC7  /tmp/DownloadInstallAgentPackage' | sha256sum -c; then
        . /tmp/DownloadInstallAgentPackage
        Download_Install_Agent
   else echo "Fail to validate agent installation script."; logger -t Fail to validate agent installation script
   fi
else echo "Fail to download agent installation script."; logger -t Fail to download Deep Security Agent installation script; exit 1;
fi 

sleep 15
/opt/ds_agent/dsa_control -r
/opt/ds_agent/dsa_control -x dsm_proxy://10.15.5.82:5432/
/opt/ds_agent/dsa_control -a dsm://dsmgr.smig.corp:4120/ "policyid:17" "relaygroupid:1"

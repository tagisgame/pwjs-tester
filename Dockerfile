FROM ubuntu:latest

RUN apt-get update
RUN apt-get install --yes nodejs
RUN apt-get install --yes npm
RUN apt-get install --yes cron
COPY . /root/src
RUN cd /root/src && mv ./node_modules ./node_modules.tmp && mv ./node_modules.tmp ./node_modules && npm install
RUN mkdir /root/data
ADD crontab /etc/cron.d/pwsj-tester-cron
RUN chmod 0644 /etc/cron.d/pwsj-tester-cron
RUN touch /var/log/cron.log
RUN crontab /etc/cron.d/pwsj-tester-cron

CMD echo "starting" && echo "continuing" && (cron) \
    && echo "tailing..." && : >> /var/log/cron.log && tail -f /var/log/cron.log
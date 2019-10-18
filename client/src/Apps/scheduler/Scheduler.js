import React, { Component } from "react";
import { DayPilot, DayPilotScheduler } from "daypilot-pro-react";
import Zoom from "./Zoom";

class Scheduler extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cellWidthSpec: "Auto",
      timeHeaders: [{ groupBy: "Month" }, { groupBy: "Day", format: "d" }],
      scale: "Day",
      days: DayPilot.Date.today().daysInMonth(),
      startDate: DayPilot.Date.today().firstDayOfMonth(),
      timeRangeSelectedHandling: "Enabled",
      onTimeRangeSelected: function(args) {
        var dp = this;
        DayPilot.Modal.prompt("Create a new event:", "Event 1").then(function(
          modal
        ) {
          dp.clearSelection();
          if (!modal.result) {
            return;
          }
          dp.events.add(
            new DayPilot.Event({
              start: args.start,
              end: args.end,
              id: DayPilot.guid(),
              resource: args.resource,
              text: modal.result
            })
          );
        });
      },
      eventMoveHandling: "Update",
      onEventMoved: function(args) {
        this.message("Event moved: " + args.e.text());
      },
      eventResizeHandling: "Update",
      onEventResized: function(args) {
        this.message("Event resized: " + args.e.text());
      },
      eventDeleteHandling: "Update",
      onEventDeleted: function(args) {
        this.message("Event deleted: " + args.e.text());
      },
      eventClickHandling: "Disabled",
      eventHoverHandling: "Bubble",
      bubble: new DayPilot.Bubble({
        onLoad: function(args) {
          // if event object doesn't specify "bubbleHtml" property
          // this onLoad handler will be called to provide the bubble HTML
          args.html = "Event details";
        }
      }),
      treeEnabled: true
    };
  }

  componentDidMount() {
    // load resource and event data
    this.setState({
      resources: [
        { name: "Resource A", id: "A" },
        { name: "Resource B", id: "B" },
        { name: "Resource C", id: "C" },
        { name: "Resource D", id: "D" },
        { name: "Resource E", id: "E" },
        { name: "Resource F", id: "F" },
        { name: "Resource G", id: "G" }
      ],
      events: [
        {
          id: 1,
          text: "Event 1",
          start: "2018-05-02T00:00:00",
          end: "2018-05-05T00:00:00",
          resource: "A"
        },
        {
          id: 2,
          text: "Event 2",
          start: "2018-05-03T00:00:00",
          end: "2018-05-10T00:00:00",
          resource: "C",
          barColor: "#38761d",
          barBackColor: "#93c47d"
        },
        {
          id: 3,
          text: "Event 3",
          start: "2018-05-02T00:00:00",
          end: "2018-05-08T00:00:00",
          resource: "D",
          barColor: "#f1c232",
          barBackColor: "#f1c232"
        },
        {
          id: 4,
          text: "Event 3",
          start: "2018-05-02T00:00:00",
          end: "2018-05-08T00:00:00",
          resource: "E",
          barColor: "#cc0000",
          barBackColor: "#ea9999"
        }
      ]
    });
  }

  zoomChange(args) {
    switch (args.level) {
      case "month":
        this.setState({
          startDate: DayPilot.Date.today().firstDayOfMonth(),
          days: DayPilot.Date.today().daysInMonth(),
          scale: "Day"
        });
        break;
      case "week":
        this.setState({
          startDate: DayPilot.Date.today().firstDayOfWeek(),
          days: 7,
          scale: "Day"
        });
        break;
      default:
        throw new Error("Invalid zoom level");
    }
  }

  render() {
    var { ...config } = this.state;
    return (
      <div>
        <Zoom onChange={args => this.zoomChange(args)} />
        <br />
        <DayPilotScheduler
          {...config}
          ref={component => {
            this.scheduler = component && component.control;
          }}
        />
      </div>
    );
  }
}

export default Scheduler;

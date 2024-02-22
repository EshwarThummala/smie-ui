import Button from "react-bootstrap/Button";
import { Alert } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import useUserDataContext from "../contexts/UserDataContext";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import { useState } from "react";
import { fetchUserDetails } from "../api/filterApi";

export default function UserForm() {
  const { setUserData } = useUserDataContext();
  const [minFollowerCount, setMinFollowerCount] = useState();
  const [maxFollowerCount, setMaxFollowerCount] = useState();
  const [keyword, setKeyword] = useState("");
  const [avgVideoViews, setAvgVideoViews] = useState();
  const [username, setUsername] = useState("");
  const [instaId, setInstaId] = useState(false);
  const [ytId, setYtId] = useState(false);
  const [error, setError] = useState("");
  const [country, setCountry] = useState("Country");

  const countries = [
    "AR",
    "AT",
    "AU",
    "BR",
    "BY",
    "CA",
    "CH",
    "CL",
    "CO",
    "DE",
    "DZ",
    "EC",
    "ES",
    "FR",
    "GB",
    "GR",
    "ID",
    "IT",
    "JP",
    "KW",
    "MX",
    "MY",
    "NL",
    "PH",
    "RO",
    "TH",
    "TR",
    "TW",
    "US",
    "VN",
  ];

  function handleSubmit(data) {
    data.preventDefault();
    if (parseInt(minFollowerCount) > parseInt(maxFollowerCount)) {
      setError(
        "Minimum follower count should be greater than maximum follower count"
      );
    } else {
      setError("");
      let newFilters = {};
      if (minFollowerCount && maxFollowerCount) {
        newFilters["follower_filter"] = [minFollowerCount, maxFollowerCount];
      }
      if (keyword) {
        newFilters["keyword_filter"] = keyword;
      }
      if (avgVideoViews) {
        newFilters["avgview_filter"] = avgVideoViews;
      }
      let socialids = [];
      if (instaId) {
        socialids.push("ins_id");
      }
      if (ytId) {
        socialids.push("yt_id");
      }
      if (socialids.length !== 0) {
        newFilters["socialid_filter"] = socialids;
      }
      if (username) {
        newFilters["username_filter"] = username;
      }
      if (countries.includes(country)) {
        newFilters["country_filter"] = country;
      }
      fetchUserDetails(newFilters, setUserData);
    }
  }

  return (
    <Card>
      <Card.Body>
        <Card.Title>Filters</Card.Title>
        {error !== "" && <Alert variant="danger">{error}</Alert>}
        <Form>
          <InputGroup className="mb-1 mt-4">
            <InputGroup.Text>Min follower count</InputGroup.Text>
            <Form.Control
              type="number"
              value={minFollowerCount}
              onChange={(e) => setMinFollowerCount(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-4">
            <InputGroup.Text>Max follower count</InputGroup.Text>
            <Form.Control
              type="number"
              value={maxFollowerCount}
              onChange={(e) => setMaxFollowerCount(e.target.value)}
            />
          </InputGroup>

          <FloatingLabel className="mb-4" label="Keyword Search">
            <Form.Control
              type="text"
              placeholder="Enter keyword"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
          </FloatingLabel>

          <InputGroup className="mb-4">
            <InputGroup.Text>Average video views</InputGroup.Text>
            <Form.Control
              type="number"
              value={avgVideoViews}
              onChange={(e) => setAvgVideoViews(e.target.value)}
            />
          </InputGroup>
          <Row>
            <Col md={4} className="mb-4">
              <Form.Check
                type="switch"
                id="custom-switch"
                onChange={() => setInstaId((previousValue) => !previousValue)}
                label="Instagram"
              />
            </Col>
            <Col>
              <Form.Check
                type="switch"
                id="custom-switch"
                onChange={() => setYtId((previousValue) => !previousValue)}
                label="Youtube"
              />
            </Col>
          </Row>
          <FloatingLabel className="mb-4" label="Username Search">
            <Form.Control
              type="text"
              placeholder="Enter keyword"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </FloatingLabel>

          <Form.Select
            aria-label="Default select example"
            className="mb-4"
            onChange={(e) => setCountry(e.target.value)}
          >
            <option>No Selection</option>
            {countries.map((country) => (
              <option key={country}>{country}</option>
            ))}
          </Form.Select>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Apply Filters
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

const orbits = require("../../db/orbits");

test("orbits | setOrbitData | Should Return Orbit Class Name for Orbit Object", () => {
    expect(() => orbits.setOrbitData("Orbit15", {foo: "bar"})).toThrow("Orbit15 does not exist")
})

test("orbits | setOrbitData | Should Set Orbit Data", () => {
    orbits.setOrbitData("Orbit1", {trafficSpeed: 15})
    let orbit1 = orbits.orbits.find((orbit) => orbit.getName() === "Orbit1");
    expect(orbit1.getTrafficSpeed()).toBe(15)
})


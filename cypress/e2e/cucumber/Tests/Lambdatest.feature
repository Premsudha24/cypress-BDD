Feature: Testing LambdaSite
    Scenario Outline: Test Case of User Registration
        Given Opening Lambda LambdaSite<index>
        When clicking on Continue button
        And Filling registration details
        When Checking validation if user created
        And clicking on logout and Continue
        Then login again
        Examples:
            | index |
            | 0     |
            | 1     |
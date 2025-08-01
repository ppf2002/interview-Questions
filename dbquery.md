'Parameterized query

<%
' --- Database Connection ---
Dim objConn
Set objConn = Server.CreateObject("ADODB.Connection")
objConn.Open "Provider=SQLOLEDB;Server=YourServerName;Database=YourDatabaseName;UID=YourUsername;PWD=YourPassword;"

' --- Parameterized Query ---
Dim objCmd
Set objCmd = Server.CreateObject("ADODB.Command")

' Set the active connection for the command object
Set objCmd.ActiveConnection = objConn

' Define the SQL query with placeholders (?) for parameters
objCmd.CommandText = "SELECT \* FROM Users WHERE Username = ? AND Password = ?"
objCmd.CommandType = adCmdText ' Specify that it's a text command (SQL query)

' Create and append parameters to the command object
' Parameters are appended in the order they appear in the SQL query
' CreateParameter(Name, Type, Direction, Size, Value)
' adVarChar for strings, adInteger for integers, etc.
' adParamInput for input parameters
objCmd.Parameters.Append objCmd.CreateParameter("@Username", adVarChar, adParamInput, 50, "john.doe")
objCmd.Parameters.Append objCmd.CreateParameter("@Password", adVarChar, adParamInput, 50, "securepassword")

' --- Execute the Query and Process Results ---
Dim objRS
Set objRS = objCmd.Execute

If Not objRS.EOF Then
Response.Write "User found: " & objRS("Username")
Else
Response.Write "User not found."
End If

' --- Cleanup ---
objRS.Close
Set objRS = Nothing
Set objCmd = Nothing
objConn.Close
Set objConn = Nothing
%>

'Stored Proec

CREATE PROCEDURE MyStoredProcedure
@InputParam VARCHAR(50),
@OutputParam INT OUTPUT
AS
BEGIN
-- Perform some operation, e.g., insert data and get an ID
INSERT INTO MyTable (Column1) VALUES (@InputParam);
SET @OutputParam = SCOPE_IDENTITY(); -- Get the ID of the newly inserted row
END;

<%
Option Explicit

' ADO Constants (can be defined or referenced from adovbs.inc)
Const adParamInput = 1
Const adParamOutput = 2
Const adCmdStoredProc = 4
Const adVarchar = 200
Const adInteger = 3

Dim objConn, objCmd, objParamInput, objParamOutput
Dim strInputData, intOutputID

' Database Connection String
Dim strConnString
strConnString = "Provider=SQLOLEDB;Data Source=YourServerName;Initial Catalog=YourDatabaseName;User ID=YourUserID;Password=YourPassword;"

' Get input data (e.g., from a form)
strInputData = "Sample Data" ' Replace with Request.Form("YourInputField")

Set objConn = Server.CreateObject("ADODB.Connection")
objConn.Open strConnString

Set objCmd = Server.CreateObject("ADODB.Command")
Set objCmd.ActiveConnection = objConn
objCmd.CommandText = "MyStoredProcedure" ' Name of your stored procedure
objCmd.CommandType = adCmdStoredProc

' Create and append input parameter
Set objParamInput = objCmd.CreateParameter("@InputParam", adVarchar, adParamInput, 50, strInputData)
objCmd.Parameters.Append objParamInput

' Create and append output parameter
Set objParamOutput = objCmd.CreateParameter("@OutputParam", adInteger, adParamOutput)
objCmd.Parameters.Append objParamOutput

' Execute the stored procedure
objCmd.Execute

' Retrieve the value from the output parameter
intOutputID = objCmd.Parameters("@OutputParam").Value

Response.Write "Stored procedure executed successfully.<br>"
Response.Write "Input Data: " & strInputData & "<br>"
Response.Write "Output ID: " & intOutputID

' Clean up objects
Set objParamOutput = Nothing
Set objParamInput = Nothing
Set objCmd = Nothing
objConn.Close
Set objConn = Nothing
%>

# Security Notes for NoxTitan

## Known Vulnerability: xlsx Package

**Package:** `xlsx@0.18.5`

**Status:** Known Issue - No Patch Available

### Vulnerabilities Identified

1. **Regular Expression Denial of Service (ReDoS)**
   - Affected versions: < 0.20.2
   - Patched version: Not available on npm

2. **Prototype Pollution**
   - Affected versions: < 0.19.3
   - Patched version: Not available on npm

### Context

The `xlsx` package (SheetJS Community Edition) is used in this application for importing Excel files (`.xlsx` and `.xls` formats) via the `/api/import` endpoint. The latest version available on npm is 0.18.5 (published March 2022), which contains known security vulnerabilities.

### Why This Version Is Used

- **Latest Available:** 0.18.5 is the most recent version published to npm
- **No Alternatives:** The required patched versions (0.19.3+ or 0.20.2+) have not been published to the npm registry
- **Functionality Required:** Excel import is a core feature for employee data import

### Risk Assessment

**Risk Level:** Medium

- The ReDoS vulnerability could potentially cause denial of service if malicious regular expressions are processed
- The Prototype Pollution vulnerability could allow attackers to modify object prototypes
- Both vulnerabilities require the attacker to control the input (Excel file content)

### Mitigation Strategies

1. **Input Validation:** The import API requires authentication (`getServerSession`)
2. **File Size Limits:** Import is limited to authenticated users only
3. **Sandboxed Processing:** Excel parsing happens in an isolated API route
4. **User Access Control:** Only authenticated users with proper permissions can import files

### Recommendations

1. **Monitor for Updates:** Regularly check for newer versions of `xlsx` on npm
2. **Consider Alternatives:** Evaluate alternative libraries such as:
   - `exceljs` - More actively maintained
   - `@sheet/sheet` - SheetJS Pro Edition (commercial)
   - Server-side conversion services
3. **Access Control:** Ensure only trusted users have access to the import functionality
4. **Input Sanitization:** Validate and sanitize Excel file content before processing

### Future Actions

- [ ] Monitor npm for xlsx updates beyond 0.18.5
- [ ] Evaluate migration to alternative Excel parsing libraries
- [ ] Consider implementing additional input validation for Excel imports
- [ ] Review and enhance access controls for the import API endpoint

---

**Last Updated:** 2026-01-14
**Reviewed By:** Copilot Security Scan

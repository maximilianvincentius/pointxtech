      <motion.span style={{ y }} className="absolute top-0 left-0">
        {strip.map((n, i) => (
          <span key={i} style={{ height: `${LINE_HEIGHT}em`, lineHeight: `${LINE_HEIGHT}em` }}>
            {n}
          </span>
        ))}
      </motion.span>
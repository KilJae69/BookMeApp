function Brand({src,label,href}) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        <div className="flex items-center gap-2 cursor-pointer group">
          <img
            className="max-h-12 object-contain object-left"
            src={src}
            alt={`${label} logo`}
            width={48}
            height={48}
          />
          <span className="font-bold text-textPrimary400 dark:text-textPrimaryDark group-hover:text-textPrimary700 dark:group-hover:text-white">
            {label}
          </span>
        </div>
      </a>
    );
}

export default Brand
